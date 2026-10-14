from django.db import models


# Create your models here.
class Categories(models.Model):
    category_id = models.IntegerField(primary_key=True)
    category_name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.category_id} - {self.category_name}: {self.description}"

    class Meta: 
        db_table = "categories"