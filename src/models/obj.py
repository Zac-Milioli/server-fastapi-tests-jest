from pydantic import BaseModel
from enum import Enum

class Objeto(BaseModel):
    """Um objeto qualquer para colocar no armário"""
    name: str


class Responses(Enum):
    """Possíveis respostas para as funções"""
    OK: str = "OK"
    ERRO: str = "ERRO"
    NOT_FOUND: str = "NOT FOUND"


class Armario:
    """O armário onde o usuário irá inserir objetos"""

    def __init__(self, name: str = 'Armário sem nome') -> None:
        self.name = name
        self._conteudo = []

    @classmethod
    def get_conteudos(self) -> dict:
        return {self._conteudo}

    @classmethod
    def add_conteudo(self, objeto: Objeto) -> None:
        try:
            self._conteudo.append(objeto)
            return Responses.OK
        except:
            return Responses.ERRO
    
    @classmethod
    def delete_conteudo(self, objeto: Objeto):
        if objeto not in self.get_conteudo:
            return Responses.NOT_FOUND
        try:
            self._conteudo.pop(objeto)
            return Responses.OK
        except:
            return Responses.ERRO
    
    @classmethod
    def __str__(self) -> str:
        return f'{self.name}: {"".join(self._conteudo)}'