import { criaEscolas } from "./criaEscolas.js"
import { hideShowNextContent } from "./hideShowNextContent.js"
criaEscolas()
const nomesDoProfessors = document.querySelectorAll('[data-professor]')
const nomeDasescolas = document.querySelectorAll('[data-escola]')

hideShowNextContent(nomesDoProfessors)
hideShowNextContent(nomeDasescolas)

