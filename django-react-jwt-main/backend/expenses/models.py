# expenses/models.py
from django.db import models

class Expense(models.Model):
    title = models.CharField(max_length=255)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField()
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)