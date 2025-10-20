########################

#Proyecto piedra papel o tijera
#El usuario interactua con la maquina

import random

def jugar():
    #el usuario elige una opcion y luego
    usuario = input("Elige una opción: 'pi' para piedra, 'pa' para papel, 'ti' para tijera \n").lower()

    #la opcion escogida debe coincidir con la lista
    computadora = random.choice(['pi', 'pa', 'ti'])

    if usuario == computadora:
        return "!Empate!"
    
    if gana_jugador(usuario, computadora):
        return "!Ganaste!"
    
    return "!Perdiste!"


def gana_jugador(jugador, oponente):
    #retorna True si el jugador gana
    #Piedra gana a tijera (pi > ti)
    #Tiejra gana a papel (ti > pa)
    #Papel gana a tijera (pa > ti)

    if ((jugador == 'pi' and oponente == 'ti') or (jugador == 'ti' and oponente == 'pa') or (jugador == 'pa' and oponente == 'ti')):
        return True
    else:
        return False

print(jugar())