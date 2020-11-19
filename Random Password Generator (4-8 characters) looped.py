import random
while True:

    def shuffle(string):
        templist = list(string)
        random.shuffle(templist)
        return "".join(templist)


    userinput = input("How long do you want your password(4-8): ")
    userinput = int(userinput)

    upper_char1 = chr(random.randint(65, 90))
    upper_char2 = chr(random.randint(65, 90))
    lower_char1 = chr(random.randint(97, 122))
    lower_char2 = chr(random.randint(97, 122))
    num1 = chr(random.randint(48, 57))
    num2 = chr(random.randint(48, 57))
    symbol1 = chr(random.randint(33, 38))
    symbol2 = chr(random.randint(33, 38))

    if userinput == 4:
        print(shuffle(upper_char1 + lower_char2 + num2 + symbol1))

    elif userinput == 5:
        print(shuffle(upper_char1 + num2 + lower_char1 + num1 + symbol2))

    elif userinput == 6:
        print(shuffle(upper_char1 + num2 + num1 + lower_char1 + lower_char2 + symbol1))

    elif userinput == 7:
        print(shuffle(upper_char1 + num2 + num1 + lower_char1 + lower_char2 + symbol1 + symbol2))

    elif userinput == 8:
        print(shuffle(upper_char1 + upper_char2 + lower_char1 + lower_char2 + num2 + num1 + symbol1 + symbol2))
    else:

        while userinput != (4, 8):
            userinput = input("Follow the rules and put in the right number\nHow long do you want your password(4-8): ")
            userinput = int(userinput)
            if userinput == 4:
                print(shuffle(upper_char1 + lower_char2 + num2 + symbol1))
                break

            elif userinput == 5:
                print(shuffle(upper_char1 + num2 + lower_char1 + num1 + symbol2))
                break

            elif userinput == 6:
                print(shuffle(upper_char1 + num2 + num1 + lower_char1 + lower_char2 + symbol1))
                break

            elif userinput == 7:
                print(shuffle(upper_char1 + num2 + num1 + lower_char1 + lower_char2 + symbol1 + symbol2))
                break

            elif userinput == 8:
                print(shuffle(upper_char1 + upper_char2 + lower_char1 + lower_char2 + num2 + num1 + symbol1 + symbol2))
                break
    while True:
        answer = str(input('Run again? (y/n): '))
        if answer in ('y', 'n'):
            break
        else:
            print("invalid input.")
    if answer == 'y':
        continue
    elif answer == "n":
        print("Goodbye")
        break
