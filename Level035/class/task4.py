
def search():
    text = input("Enter text: ")

    word = input("Enter word what you searching: ")

    word_count = text.find(word)

    if word_count > -1:
        print("Word found")
    else:
        print("Word not found")

search()