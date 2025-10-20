#######################################

#Adivina el numero: el usuario adivina 1 número generado por computadora
#donde el número puede ser mayor, menor o igual

import random


def adivina_numero(x):
    print("==============================================")
    print(" ")
    print(" El objetivo del juego es adivinar un número generado por computadora")
    print(" ")
    print("==============================================")

    #numero aleatorio entre 1 y x
    num_aleatorio = random.randint(1, x)

    #iniciar en 0 para no tener problemas con el rango
    prediccion = 0

    while prediccion != num_aleatorio:
        #usuario ingresa numero
        prediccion = int(input(f"Adivina un numero entre 1 y {x}: "))#f-string

        if prediccion < num_aleatorio:
            print("Intenta de nuevo, numero pequeño")
        elif prediccion > num_aleatorio:
            print("Intenta de nuevo, numero grande")
        
    print(f"Felicitaciones, adivinaste el numero {num_aleatorio}")


adivina_numero(10)