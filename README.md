# Musiteca
   Musiteca é um projeto que teve como inspiração os laboratórios da disciplina Sistema da Informação I da Universidade Federal de Campina Grande,
trata-se de uma aplicação que reune as funcionalidades que alguns sistemas de áudio possuem, como por exemplo,
adicionar artistas ao sistema, adicionar artistas do sistema aos artistas favoritos,
salvar qual a última música tocada daquele determinado artista, gerenciar playlists, etc.

### Pré requesito
Você vai precisar rodar o Front End em um servidor diferente do Back End que não seja a porta 8080.
Deixo como sugestão o SimpleHttpServer do Python.

Você vai precisar também do gradle para rodar o servidor Back End em springboot. (Você pode rodar também em sua IDE, caso ela suporte o gradle)
```
sudo apt install gradle
```

* Caso haja erros na hora de subir o BackEnd

Também é necessário instalar o postgres e criar um novo banco de dados chamado musitecadb

Com usuário e senha iguais a :

```
username=postgres
password=postgres
```


### Rodando a aplicação

* Subindo o FrontEnd com python:

Entre no diretório que está localizado o FrontEnd.

```
cd FrontEnd/
```

Execute o comando em python para subir a aplicação FrontEnd em http://localhost:8000

```
python -m SimpleHTTPServer
```

* Subindo o BackEnd com gradle instalado:

Entre no diretório que está localizado o BackEnd.

```
cd BackEnd/
```

```
gradle bootRun
```

Espere a aplicação backEnd subir e pronto, o servidor BackEnd estará ligado a porta 8080 em http://localhost:8080 e o FrontEnd estará ligado a porta 8000 do http://localhost:8000

### Exemplo Online

O seguinte repositório contém uma demonstração da aplicação online [Musiteca Heroku Example](https://github.com/yurikelvin/musitecaHerokuExample), o exemplo em questão utiliza o projeto apenas como um servidor spring para facilitar o deploy.



## Authors

* **Yuri Silva** - *Desenvolvimento*

## Créditos
* [Start Bootstrap](https://startbootstrap.com/) - Pelo template inicial da aplicação
* [Sweet Alert](https://sweetalert.js.org/)
* Ui-Bootstrap4
* [Star Rating](http://plugins.krajee.com/star-rating)
