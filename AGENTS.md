## Git & Version Control Rules

When performing Git operations, adhere to the following workflow:

### Commit Messages
- Use the **Conventional Commits** specification (`type(scope): description`).
  - **Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.
- Keep the first line under **50 characters** and use imperative mood ("Add feature" not "Added feature").

### Branching & Safety
- **Never** push directly to `main` or `master` unless explicitly instructed.
- Always create feature branches named `feature/<description>` or `fix/<description>`.
- Always check `git status` and `git diff` before staging and committing.
- Do not commit secrets, environment variables (`.env`), or untracked build artifacts.

### Staging & Hygiene
- Keep commits atomic (one logical change per commit).
- Prefer `git add <file>` over `git add .` to avoid accidentally staging unintended changes.
