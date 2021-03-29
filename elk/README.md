# Команды для работы с ELK

### Порт Cerebro = 9090

Войти в кластер эластик url

```
http://es01:9200
```

### Создать индекс из 5 шардов, и 1 реплики

```
curl -XPUT 'http://localhost:9200/students/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "settings" : {
        "number_of_replicas" : 1,
        "number_of_shards" : 5
    }
}'
```

### Изменить количество индексов в индексе

```
curl -XPUT 'http://localhost:9200/students/_settings' \
--header 'Content-Type: application/json' \
--data-raw '{
    "settings" : {
        "number_of_replicas" : 2
    }
}'
```

### Пнуть индексы если они зависли

```
curl -XPOST localhost:9200/_cluster/reroute?retry_failed
```
