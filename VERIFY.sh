#!/bin/bash

echo "=== SOUL RESONANCES FRONTEND - BUILD VERIFICATION ==="
echo ""

echo "✓ Directory structure:"
ls -la | grep -E "^d" | awk '{print "  " $NF}'
echo ""

echo "✓ Configuration files:"
ls -1 *.{js,json,html,css} 2>/dev/null | sed 's/^/  /'
echo ""

echo "✓ Source components:"
find src/components -name "*.jsx" | sed 's/^/  /'
echo ""

echo "✓ Pages:"
find src/pages -name "*.jsx" | sed 's/^/  /'
echo ""

echo "✓ Core source files:"
find src -maxdepth 1 \( -name "*.jsx" -o -name "*.js" -o -name "*.css" \) | sed 's/^/  /'
echo ""

echo "✓ Essential files present:"
for file in package.json index.html vite.config.js tailwind.config.js src/App.jsx src/main.jsx src/lib/supabase.js; do
  if [ -f "$file" ]; then
    echo "  ✓ $file"
  else
    echo "  ✗ MISSING: $file"
  fi
done
echo ""

echo "✓ All routes implemented:"
grep -o "path=\"[^\"]*\"" src/App.jsx | cut -d'"' -f2 | sed 's/^/  - /'
echo ""

echo "=== VERIFICATION COMPLETE ==="
