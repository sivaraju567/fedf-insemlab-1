# 💥 STEP 1: Create demo folder and enter it
mkdir git-merge-demo && cd git-merge-demo

# 💥 STEP 2: Initialize Git repository
git init

# 💥 STEP 3: Create initial App.js file and commit
echo "function greet() { console.log('Hello from main'); }" > App.js
git add App.js
git commit -m "Initial commit with greet() function"

# 💥 STEP 4: Create first branch (feature1)
git checkout -b feature1
echo "function greet() { console.log('Hello from Alice in feature1'); }" > App.js
git add App.js
git commit -m "Alice updated greet() in feature1"

# 💥 STEP 5: Create second branch (feature2)
git checkout main
git checkout -b feature2
echo "function greet() { console.log('Hello from Bob in feature2'); }" > App.js
git add App.js
git commit -m "Bob updated greet() in feature2"

# 💥 STEP 6: Merge both into main (conflict will occur)
git checkout main
git merge feature1
git merge feature2 || echo "⚠️ Merge conflict occurred! Open App.js to resolve manually."

# 💥 STEP 7: Show next steps for user
echo ""
echo "==============================================="
echo "👉 Conflict created in App.js!"
echo "Open App.js in VS Code — you’ll see conflict markers:"
echo "<<<<<<< HEAD"
echo "function greet() { console.log('Hello from Alice in feature1'); }"
echo "======="
echo "function greet() { console.log('Hello from Bob in feature2'); }"
echo ">>>>>>> feature2"
echo ""
echo "🛠️ Edit it to this and save:"
echo "function greet() { console.log('Hello from both Alice and Bob!'); }"
echo ""
echo "Then run:"
echo "git add App.js"
echo "git commit -m 'Resolved merge conflict manually'"
echo "==============================================="

