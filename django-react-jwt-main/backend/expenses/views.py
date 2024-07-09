# expenses/views.py
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Expense
from .serializers import ExpenseSerializer

class ExpenseListView(APIView):
    def get(self, request):
        expenses = Expense.objects.filter(user=request.user)
        serializer = ExpenseSerializer(expenses, many=True)
        return Response(serializer.data)

class ExpenseCreateView(APIView):
    def post(self, request):
        serializer = ExpenseSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)