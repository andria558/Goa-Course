
price = int(input('Enter price: '))

if price > 50:
    print('discount 10%')
elif price > 20 and price <= 50:
    print('discount 5%')
else:
    print('no discount')