<div align="center">
	<img src="logo.png" alt="logo">
</div>

# Infected Trees

Сервис для мониторинга больных деревьев в Санкт-Петербурге

## Аннотация

Города часто называют каменными джунглями из-за недостатка зелени. Не все растения, в т.ч. и деревья, способны выдержать неблагоприятные условия городской среды, к которым относятся загрязнение воздуха, выбросы от автотранспорта и промышленных объектов, бедность почв. Поэтому для городского озеленения, как правило, используется ограниченный перечень растений. Он сложился из видов, которые от природы имеют защитные механизмы. Это такие лиственные породы, как береза пушистая, вяз шершавый, клён остролистный, липа мелколистная, крупнолистная, конский каштан и др., а также хвойные деревья: ель колючая, канадская, лиственница европейская, обыкновенная.

Растения, произрастающие в городах, не только выполняют эстетическую функцию, но и осаждают на поверхности своего листового аппарата взвешенные в воздухе пылевые частицы, очищая воздух. Кроме того, в процессе фотосинтеза растения поглощают углекислый газ, частично компенсируя углеродный след человека. Поэтому, в условиях современного экологического кризиса, озеленение города становится необходимостью.

Вяз – второй по частоте использования в озеленении Санкт-Петербурга. Но последние 15 лет на территории города остро стоит проблема усыхания вязовых насаждений. Причиной массовой гибели этих деревьев является графиоз ильмовых, или голландская болезнь, который распространяют жуки заболонники. В вязовых посадках болезнь распространяется в виде очагов — скоплений пораженных деревьев. Ежегодно погибает все больше вязов. Из-за высокой скорости распространения графиоза и учащающихся случаев гибели растений возникает необходимость создания ресурса для сбора и обработки информации о больных деревьях.

## О проекте

Проект призван решить проблему усыхания вязовых насаждений на территории города Санкт-Петербург.
Своевременные действия по противодействию распространения графиоза, предприятие которых станет возможным за счёт мониторинга больных деревьев по всему городу, позволят спасти большое количество вязов.

## Участие в конкурсах

На данный момент я успешно защитил проект Infected Trees на региональном этапе ВСОШ по экологии,
в дальнейшем планируется участие в конкурсах регионального и всероссийского уровней.

## Как запустить проект локально

**Важно!** Для запуска необходимо иметь установленный `Node.js`, `npm`, а также СУБД
`MongoDB` (Также можно создать облачный кластер) 

1. Склонируйте репозиторий

```shell
git clone https://github.com/shelepuginivan/InfectedTrees.git
cd InfectedTrees
```

2. Установите необходимые зависимости

```shell
npm ci --prefix ./server
npm ci --prefix ./client
```

3. Настройте переменное окружение сервера (необходимые поля указаны в файле `.env.example`)

```shell
cd server
mv .env.example .env
vim .env
```

4. Запустите проект

```shell
npm start --prefix ./client
npm run dev --prefix ./server
```
