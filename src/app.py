from fastapi import FastAPI
from models.obj import Armario
import uvicorn

app = FastAPI()

armario_instance = Armario(name="Meu armário")

@app.get("/armario")
def get_armario():
    return armario_instance.get_conteudos()

@app.post("/armario/{objeto}")
def post_objeto(objeto: str):
    response = armario_instance.add_conteudo(objeto=objeto)
    return response

@app.delete('/armario/{objeto}')
def delete_objeto(objeto: str):
    response = armario_instance.delete_conteudo(objeto=objeto)
    return response

if __name__ == "__main__":
    uvicorn.run(app=app, host='0.0.0.0', port=5000)