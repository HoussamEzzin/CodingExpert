from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from tutorials.models import Tutorial
from tutorials.serializers import TutorialSerializer
from rest_framework.decorators import api_view


@api_view(['GET','POST','DELETE'])
def tutorial_list(request):
    """get list ofr tutorials,
    Post a new tutorial,
    delete all tutorials

    """
    if request.method == 'GET':
        tutorials = Tutorial.objects.all()
        
        title = request.GET.get('title',None)
        if title is not None:
            tutorials = tutorials.filter(title_icontains=title)
        
        tutorials_serializer = TutorialSerializer(tutorials,many=True)
        return JsonResponse(
            tutorials_serializer.data,
            safe = False
        )
        # safe=False for objects serialization 
    elif request.method == 'POST':
        tutorial_data = JSONParser().parse(request)
        serializer = TutorialSerializer(data=tutorial_data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(
                serializer.data,
                status=status.HTTP_201_CREATED
            )
        return JsonResponse(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )
    elif request.method == 'DELETE':
        count = Tutorial.objects.all().delete()
        return JsonResponse({
            'message':' {} Tutorials were deleted successefully!'.format(count[0])
        },
                            status=status.HTTP_204_NO_CONTENT)
        


@api_view(['GET','PUT','DELETE'])
def tutorial_detail(request,pk):
    # find tutorial by pk (id)
    try:
        tutorial = Tutorial.objects.get(pk=pk)
        if request.method == 'GET':
            serializer = TutorialSerializer(tutorial)
            return JsonResponse(
                serializer.data
            )
        elif request.method == 'PUT':
            data = JSONParser().parse(request)
            serializer = TutorialSerializer(tutorial,data=data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(
                    serializer.data               )
            return JsonResponse(
                serializer.errors,
                status=status.HTTP_400_BAD_REQUEST
            )
            
    except Tutorial.DoesNotExist:
        return JsonResponse({
            'message': 'The tutorial does not exist'
        },
            status=status.HTTP_404_NOT_FOUND)
        
    # get / put / delete tutorial

@api_view(['GET'])
def tutorial_list_published(request):
    # get all published tutorials
    tutorials = Tutorial.objects.filter(published =True)
    
    if request.method=='GET':
        serializer = TutorialSerializer(tutorials,many=True)
        return JsonResponse(
            serializer.data,
            safe=False
        )