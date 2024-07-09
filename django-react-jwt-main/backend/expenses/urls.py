# expenses/urls.py
from django.urls import path
from .views import ExpenseListView, ExpenseCreateView

urlpatterns = [
    path('expenses/', ExpenseListView.as_view()),
    path('expenses/create/', ExpenseCreateView.as_view()),
]