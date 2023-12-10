from rest_framework import status
from rest_framework.permissions import IsAuthenticatedOrReadOnly, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import ChatGptSerializer

# sasa
class ChatMasterView(APIView):
    serializer_class = ChatGptSerializer
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = ChatGptSerializer(data=request.data)

        if serializer.is_valid():
            input_text = serializer.validated_data['text']

            response_data = {"text": input_text}
            return Response({"answer": "true"}, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
