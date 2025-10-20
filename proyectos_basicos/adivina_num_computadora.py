#######################################

#Adivina el numero: la computadora adivina 1 número generado por el usuario
#donde el número puede ser mayor, menor o igual


import random


def adivina_num_computadora(x):
    print("==============================================")
    print(" ")
    print(" El objetivo del juego es ingresar un numero y la computadora lo adivinará")
    print(" ")
    print(f"Elige un numero entre 1 y {x}")
    print("==============================================")

    limite_inferior = 1
    limite_superior = x

    respuesta = ""

    while respuesta != "c":
        #generar prediccion
        if limite_inferior != limite_superior:
            prediccion = random.randint(limite_inferior, limite_superior)
        else:
            #limite_inferior o limite_superior son validas, por temas de descarte de numeros
            prediccion = limite_inferior
        
        #obtener respuesta del usuario
        respuesta = input(f"La prediccion es {prediccion} . Si es muy alta, ingresa (A). Si es baja, (B) y si es correcta (C): ").lower()

        if respuesta == "a":
            limite_superior -= prediccion
        elif respuesta == "b":
            limite_inferior += prediccion
    
    print(f"La computadora adivinó el numero {prediccion}")


adivina_num_computadora(10)