# Create demo folder and enter it
mkdir git-merge-demo && cd git-merge-demo

# Initialize Git repo
git init

# Create file and first commit
echo "function greet() { console.log('Hello from main'); }" > App.js
git add App.js
git commit -m "Initial commit with greet() function"

# Create and switch to feature1 branch
git checkout -b feature1
echo "function greet() { console.log('Hello from Alice in feature1'); }" > App.js
git add App.js
git commit -m "Alice updated greet() in feature1"

# Switch back to main and create feature2
git checkout main
git checkout -b feature2
echo "function greet() { console.log('Hello from Bob in feature2'); }" > App.js
git add App.js
git commit -m "Bob updated greet() in feature2"

# Merge both into main to create conflict
git checkout main
git merge feature1
git merge feature2 || echo "💥 Merge conflict occurred! Open App.js to resolve it manually."

# Show status and conflict message
git status
echo ""
echo "👉 Open App.js — you'll see conflict markers (<<<<<<<, =======, >>>>>>>)"
echo "Edit to: function greet() { console.log('Hello from both Alice and Bob!'); }"
echo "Then run:"
echo "git add App.js"
echo "git commit -m 'Resolved merge conflict manually'"
