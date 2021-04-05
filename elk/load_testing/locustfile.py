from locust import HttpUser, task
import random


study_names = [
    'Вася',
    'Петя',
    'Аня',
    'Катя',
    'Дима',
    'Коля'
]

univerity_list = ['РИМ', 'РИВ', 'КН', 'ФИИТ', 'МАИ', 'РТФ', 'МВ', 'ЗД', 'ДАВ']

def group_generator():
    random_name = random.choice(univerity_list)
    group_name =random.randrange(1562580, 4762580)
    return f'{random_name}-{group_name}'


def generate_stutent():
    return {
        'name': random.choice(study_names),
        'year': random.randrange(1,5),
        'group': group_generator(),
        'university': random.choice(univerity_list),
    }


class QuickstartUser(HttpUser):
    @task(5)
    def write_load(self):
        st = generate_stutent()
        self.client.post('/students/_doc', json=st)

    @task(10)
    def search_load(self):
        self.client.post('/students/_search?size=10', json={
            "query": {
                "match": {
                    "name": random.choice(study_names)
                }
            }
        })

    @task(1)
    def refresh_index(self):
        self.client.get('/students/_refresh')

    @task(3)
    def search_load_heavy(self):
        self.client.post(f'/students/_search?size=150', json={
            "query": {
                "match": {
                    "name": random.choice(study_names)
                }
            }
        })
