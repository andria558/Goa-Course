from django.db import models


# Create your models here.
class Orders(models.Model):
    orders_id = models.IntegerField(primary_key=True)
    orders_name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.orders_id} - {self.orders_name}: {self.description}"

    class Meta: 
        db_table = "orders"