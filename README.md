РАБОТА З “GIT” GitHub:

1. Клонируете себе dev : git clone -b dev
   https://github.com/Nykolyn/Checking.git
2. Переходите в ветку dev. Забираете последние изменения в ветке dev. Потом
   создаете свою ветку находясь в ветке dev, с названием своей задачи: git
   checkout dev git pull origin dev git checkout -b name_your_branch
3. Работаете только в своей ветке, все изменения пушите ТОЛЬКО в нее: git add .
   git commit -m “init name_your_branch” git push origin name_your_branch
4. Когда полностью завершили работу в своей ветке и хотите добавить эти
   изменения в общий проект: 4.1) Переходите в ветку dev (и пулите все изменения
   которые внесли другие): git checkout dev git pull origin dev 4.2) Переходим в
   свою ветку: git checkout name_your_branch
5. Мерджите dev в свою ветку, разрешаешь конфликты которых то и быть не должно
   на самом деле: git merge dev Если есть конфликты, открываем свой редактор
   кода и решаем возникшие конфликты (при сложностях обращаемся к team lead’у).
   git add . git commit -m “пишем название конкретной задачи которую сделали(на
   английском)”
6. Пушите свою ветку на удаленку: git push origin name_your_branch
7. Создаете pull request на слитие с dev там на гитхабе:
   ![Image of smth](https://lh6.googleusercontent.com/G0GI2wEJAqHOIUmhGe0-tppw2k4M3S3bQvhL-vcIPagoNyJRTknh2a2-qlO58oiONvQPBRrMWsGPidunIwe8tDiyIS5xbNzpqwmMI1PLqUQFANPl2-kBiIMkRQGt8zs7Xm3BieVB)
   ![Image of Yaktocat](https://lh3.googleusercontent.com/_45Ynjt_pU_cN1Y19XnZ48WiwMuXNfRm6X0EI6Cuf6ep7l06B3Jdzy2BH3P-Pi2-kvN9JeclzOB42k31kkI3KKG57TxPDZIb07ou7lE_)

8) КАЖДЫЙ КАЖДЫЙ РАЗ !!! при изменениях, которые хотите сделать в общем проекте,
   повторяете порядок действий с пункта 2 по 7.
