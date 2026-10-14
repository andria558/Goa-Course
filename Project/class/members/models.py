from django.db import models

class Member(models.Model): 
  firsname = models.CharField(max_length=255)
  lastname = models.CharField(max_length=255)
  phone = models.IntegerField(null = True)
  join_date = models.DateField(null = True)
  def __str__(self):
    return f"{self.firsname}"