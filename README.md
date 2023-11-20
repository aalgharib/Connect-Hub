# Git Commands

> [!WARNING]
> Please do not develop features in main branch!<br />
> Please install dependencies/library under client orserver folder you are working on.

## Setting Up

1. **Clone a repository in your local folder (whereever you want)**
   ```bash
   git clone URL
   ```

## Development Cycle

1. **Check branches**

   ```bash
   git branch
   ```

2. **Switch branch to "main"**

   ```bash
   git checkout main
   ```

3. **Pull latest changes into your local "main" repository**

   ```bash
   git pull origin main
   ```

> [!NOTE]
> you should install dependencies every time in case someone add a new dependency.<br>
> Do "npm install" **under** client and server folders.<br>
> e.g. ~/ConnectHub/client npm install and ~/ConnectHub/server npm install

4. **Create a new branch**

   ```bash
   git checkout -b NEW_BRANCH_NAME
   ```

5. **Switch branches**

   ```bash
   git checkout BRANCH_NAME
   ```

6. **Development**

   ```bash
   Please develop the feature.
   ```

7. **Check status**

   ```bash
   git status
   ```

8. **Add changes**

   ```bash
   git add .
   ```

9. **Commit changes**

   ```bash
   git commit -m "Your descriptive commit message here"
   ```

10. **Push changes to the remote branch**
    ```bash
    git push origin BRANCH_NAME
    ```
11. **Go to the Github page -> Switch branch to your working branch -> Go to Pull Requests**

12. **Make a pull request (by clicking "Compare & pull requests") -> Write descriptions and Click "Create pull request"**

13. **Click "Merge pull request" -> Confirm merge -> Delete your branch**
