from enum import Enum

class Responses(Enum):
    """Possíveis respostas para as funções"""
    OK: str = "OK"
    ERRO: str = "ERRO"
    NOT_FOUND: str = "NOT FOUND"


class Armario:
    """O armário onde o usuário irá inserir objetos"""

    def __init__(self, name: str = 'Armário sem nome') -> None:
        self.name = name
        self.conteudo = []

    def get_conteudos(self) -> dict:
        return {"nome": self.name, "conteudos": self.conteudo}

    def add_conteudo(self, objeto: str) -> None:
        try:
            self.conteudo.append(objeto)
            return Responses.OK
        except Exception as e:
            return {"status": Responses.ERRO, "message": str(e)}
    
    def delete_conteudo(self, objeto: str):
        if objeto not in self.get_conteudos().get('conteudos'):
            return Responses.NOT_FOUND
        try:
            self.conteudo.remove(objeto)
            return Responses.OK
        except Exception as e:
            return {"status": Responses.ERRO, "message": str(e)}
    
    def __str__(self) -> str:
        return f'{self.name}: {"".join(self._conteudo)}'