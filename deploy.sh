#!/bin/bash

# 1. Введення назви гілки
read -p "🔀 Введи назву гілки (enter щоб залишити поточну): " BRANCH
CURRENT=$(git rev-parse --abbrev-ref HEAD)

if [ -n "$BRANCH" ] && [ "$BRANCH" != "$CURRENT" ]; then
  git switch -c "$BRANCH" || git switch "$BRANCH"
else
  BRANCH=$CURRENT
fi

# 2. Введення повідомлення коміту
read -p "📝 Введи повідомлення коміту: " MESSAGE

# 3. Коміт і пуш
echo "📦 Комітимо і пушимо в $BRANCH..."
git add .
git commit -m "$MESSAGE"
git push origin "$BRANCH"

# 4. Якщо не main — PR + merge
if [ "$BRANCH" != "main" ]; then
  echo "🔁 Створюємо Pull Request..."
  gh pr create --base main --head "$BRANCH" --title "$MESSAGE" --body "$MESSAGE" || echo "🔍 PR вже існує"

  echo "✅ Зливаємо у main..."
  gh pr merge --merge --auto
fi

# 5. Розгортання на GitHub Pages
echo "🌐 Деплой на GitHub Pages..."
npm run deploy-pages

echo "✅ Успішно завершено! Перевір:"
echo "https://viktornado.github.io/zakarpattia-presentation/"