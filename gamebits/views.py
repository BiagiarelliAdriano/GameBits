from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny


class WelcomeView(APIView):
    """Root view with a welcome message."""
    permission_classes = [AllowAny]

    def get(self, request):
        return Response({"message": "Welcome to the GameBits API!"})
