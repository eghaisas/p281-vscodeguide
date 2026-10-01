---
hide:
  - navigation   # left sidebar
---

# VS Code for Python: Quality of Life Improvements

This guide covers snippets, shortcuts, and settings that make editing Python in VSCode smoother. Everything here will run within the scope of our setup with two extensions: **Python** and **Pylance**.

Select between macOS and WSL2 at the top. The instructions will update accordingly below. 

!!! warning "Note"

    If you're stuck at any step in the **Setup** section, stop and contact a TA. The other sections are optional.
---
## Recommended Setup
=== ":fontawesome-brands-windows: WSL2"

    1. Start Linux, and open a WSL2 terminal. Navigate to the course folder (`#!bash cd course281`), and run `#!bash code .`
    2. Ensure that the **Python** and **Pylance** extensions are installed within WSL.

    !!! note
        The VS Code window runs on Windows, so all shortcut keybindings are Windows 
        ones, even though the terminal and Python run in Linux.

=== ":fontawesome-brands-apple: macOS"

    1. Open a zsh terminal. Navigate to the course folder(`#!zsh cd course281`), and run `#!zsh code .`
    
    !!! note
        If the command isn't found, open the Command Palette 
        (++cmd+shift+p++) in VS Code and run **Shell Command: Install 'code' command in PATH**.
    2. Ensure that the **Python** and **Pylance** extensions are installed.
### Turn off AI features

Recent VS Code versions include Copilot chat features without installing
anything. We would like you to disable them in order to better facilitate your learning experience. Please follow these steps.

=== ":fontawesome-brands-windows: WSL2"

    In a Linux terminal window:

    1.  Go to the course folder, and list everything in it, including hidden
        folders:

        ```bash
        cd ~/course281 
        ls -a # (1)!
        ```

        1.  The `-a` option includes hidden
            folders, whose names start with a period, such as `.vscode`.

    2.  Optional: If `.vscode` isn't in the list, create it:

        ```bash
        mkdir .vscode
        ```

    3.  The `.vscode` folder is where VS Code looks for workspace settings. We will open the settings file in here:

        ```bash
        cd .vscode
        code settings.json 
        ```

    4.  Paste the following into the file, save it, and close it:

        ```json
        {
            "chat.disableAIFeatures": true // (1)!
        }
        ```

        1.  If the file already has settings in it, don't paste the braces.
            Add only this line inside the existing `{ }`, and put a comma
            at the end of the line before it.

=== ":fontawesome-brands-apple: macOS"

    In a zsh terminal window:

    1.  Go to the course folder, and list everything in it, including hidden
        folders:

        ```zsh 
        cd ~/course281
        ls -a # (1)!
        ```

        1.  The `-a` option includes hidden folders, whose names start with a period, such as `.vscode`.

    2.  Optional: If `.vscode` isn't in the list, create it:

        ```zsh
        mkdir .vscode
        ```

    3.  The `.vscode` folder is where VS Code looks for workspace settings. We will open the settings file in here:

        ```zsh
        cd .vscode
        code settings.json
        ```

    4.  Paste the following into the file, save it, and close it:

        ```json
        {
            "chat.disableAIFeatures": true // (1)!
        }
        ```

        1.  If the file already has settings in it, don't paste the braces.
            Add only this line inside the existing `{ }`, and put a comma
            at the end of the line before it.

Also avoid the **IntelliCode** extension, which ranks completions with a
machine-learning model.

## Optional

### Snippets {.collapsible .collapsed}

A snippet is a saved block of text that VS Code inserts when you type a short
keyword, called a *prefix*, and press ++tab++. You define snippets in a JSON
file.

The following snippet adds a standard header to a new Python file: a
description of the file (a docstring) with the file name, author's name, and the
date, followed by the `numpy` and `matplotlib` imports. After the snippet is
inserted, the cursor stops at each placeholder in turn, so you can fill it in.

To create a snippets file:

=== ":fontawesome-brands-windows: WSL2"

    1. Open VSCode from the ```course281``` directory. 

    2. Press ++ctrl+shift+p++ to launch the Command Palette. Here, search for **Snippets: Configure Snippets**.

    3. Click on **New Snippets file for 'course281'...**. Name this file **config** when prompted.

    4. On line 1 of the file, copy and paste the following:

    ```json
      "Course 281 header": {
        "scope": "python",
        "prefix": "init",
        "body": [
          "\"\"\"",
          "${1:Please enter a brief description of this file.}",
          "",
          "Physics 281",
          "Author: ${2:Your name}",
          "Date: ${CURRENT_YEAR}-${CURRENT_MONTH}-${CURRENT_DATE}",
          "\"\"\"",
          "",
          "import numpy as np",
          "import scipy",
          "import matplotlib",
          "import pandas as pd",
          "import matplotlib.pyplot as plt",
          "",
          "$0"
        ],
        "description": "Docstring and imports for course281 Python files"
      }
    ```

=== ":fontawesome-brands-apple: macOS"

    1. Open VSCode from the ```course281``` directory. 

    2. Press ++cmd+shift+p++ to launch the Command Palette. Here, search for **Snippets: Configure Snippets**.

    3. Click on **New Snippets file for 'course281'...**. Name this file **config** when prompted.

    4. Next to the open brace on line 1, copy and paste the following.

    ```json
      "Course 281 header": {
        "scope": "python",
        "prefix": "init",
        "body": [
          "\"\"\"",
          "${1:Please enter a brief description of this file.}",
          "",
          "Physics 281",
          "Author: ${2:Your name}",
          "Date: ${CURRENT_YEAR}-${CURRENT_MONTH}-${CURRENT_DATE}",
          "\"\"\"",
          "",
          "import numpy as np",
          "import scipy",
          "import matplotlib",
          "import pandas as pd",
          "import matplotlib.pyplot as plt",
          "",
          "$0"
        ],
        "description": "Docstring and imports for course281 Python files"
      }
    ```

To use this snippet, open a new Python file in VSCode. Type ```init``` and press ++tab++. Your snippet should autofill.

Snippet syntax
:   `${1:text}` is a tab stop with placeholder text. The cursor visits `$1`,
    `$2`, and so on in order, and ends at `$0`. Press ++tab++ and
    ++shift+tab++ to move between them. and fill them out.

<!-- !!! note
    VS Code reads `.vscode/` only at the workspace root. Open `course281`
    itself as the folder; if you open a parent folder, the snippet doesn't
    load. -->

### Keyboard shortcuts for code editing {.collapsible .collapsed}

Try using these. If you don't like them/are uncomfortable, you can work without them just fine.

=== ":fontawesome-brands-windows: WSL2"

    | | Action | Shortcut | Notes |
    |---|---|---|---|
    | **Multi-cursors** | Pretty useful for bulk renaming|
    | | Select next match | ++ctrl+d++ | Each press adds one match |
    | | Select all matches | ++ctrl+shift+l++ | |
    | | Skip current match | ++ctrl+k+d++ | |
    | | Add cursor by click | ++alt++ + Click | 
    | | Undo last cursor | ++ctrl+u++ | |
    | | Add cursor above or below | ++ctrl+alt+up++ / ++ctrl+alt+down++ | |
    | | Column (box) select | ++shift+alt++ + drag | |
    | | Exit multi-cursor | ++escape++ | 
    | **Selection** | |
    | | Select line | ++ctrl+l++ | Repeat to extend |
    | | Expand selection | ++shift+alt+right++ | Word, then expression, line, block |
    | | Move line | ++alt+up++ / ++alt+down++ | |
    | | Duplicate line | ++shift+alt+down++ | |
    | | Delete line | ++ctrl+shift+k++ | |
    | | Toggle comment | ++ctrl+slash++ | |
    | **Folding** |Collapses blocks for readability.|
    | | Fold or unfold block | ++ctrl+shift+bracket-left++ / ++ctrl+shift+bracket-right++ | |
    | |Fold all | ++ctrl+k++, ++ctrl+0++ | |
    | |Unfold all | ++ctrl+k++, ++ctrl+j++ | |

=== ":fontawesome-brands-apple: macOS"

    | | Action | Shortcut | Notes |
    |---|---|---|---|
    | **Multi-cursors** | Pretty useful for bulk renaming|
    | |Select next match | ++cmd+d++ | Each press adds one match |
    | |Select all matches | ++cmd+shift+l++ | |
    | |Skip current match | ++cmd+k+d++| |
    | |Undo last cursor | ++cmd+u++ | |
    | |Add cursor by click | ++option++ + Click | |
    | |Add cursor above or below | ++cmd+option+up++ / ++cmd+option+down++ | |
    | |Column (box) select | ++shift+option++ + drag | |
    | |Exit multi-cursor | ++escape++ | |
    | **Selection** | |
    | |Select line | ++cmd+l++ | Repeat to extend |
    | |Expand selection | ++ctrl+shift+cmd+right++ | Word, then expression, line, block |
    | |Move line | ++option+up++ / ++option+down++ | |
    | |Duplicate line | ++shift+option+down++ | |
    | |Delete line | ++cmd+shift+k++ | |
    | |Toggle comment | ++cmd+slash++ | |
    | **Folding** |Collapses blocks for readability.|
    | |Fold or unfold block | ++cmd+option+bracket-left++ / ++cmd+option+bracket-right++ | |
    | |Fold all | ++cmd+k++, ++cmd+0++ | |
    | |Unfold all | ++cmd+k++, ++cmd+j++ | |

### Code navigation (Pylance) {.collapsible .collapsed}

=== ":fontawesome-brands-windows: WSL2"

    | Action | Shortcut | Notes |
    |---|---|---|
    | Rename symbol | ++f2++ | Scope-aware, across files |
    | Go to definition | ++f12++ or ++ctrl++ + Click | Works into libraries |
    | Peek definition | ++alt+f12++ | Inline view|
    | Show hover docs | ++ctrl+k+i++ | Or hover with the mouse |
    | Trigger autocomplete | ++ctrl+space++ | |
    | Quick fix | ++ctrl+period++ | Rule-based, such as adding a missing import |
    | Problems panel | ++ctrl+shift+m++ | |
    | Next problem | ++f8++ | |

=== ":fontawesome-brands-apple: macOS"

    | Action | Shortcut | Notes |
    |---|---|---|
    | Rename symbol | ++fn+f2++ | |
    | Go to definition | ++f12++ | Works into libraries |
    | Peek definition | ++option+f12++ | Inline view, no file switch |
    | Show hover docs | ++cmd+k+i++ | Or hover with the mouse |
    | Trigger autocomplete | ++ctrl+space++ | |
    | Quick fix | ++cmd+period++ | Rule-based, such as adding a missing import |
    | Problems panel | ++cmd+shift+m++ | |
    | Next problem | ++f8++ | |

### Running code {.collapsible .collapsed}

=== ":fontawesome-brands-windows: WSL2"

    | Action | Shortcut | Notes |
    |---|---|---|
    | Run file | ++ctrl+r++ | Custom binding; see [Keybindings](#custom-keybinding-for-the-run-button) |
    | Run without debugging | ++ctrl+f5++ | Built-in alternative |
    | Run selection in REPL | ++shift+enter++ | Read-eval-print loop in the terminal |
    | Debug | ++f5++ | Click the left margin to set breakpoints |
    | Select interpreter | ++ctrl+shift+p++, then **Python: Select Interpreter** | Choose a Linux Python, such as `/usr/bin/python3` or a virtual environment |

=== ":fontawesome-brands-apple: macOS"

    | Action | Shortcut | Notes |
    |---|---|---|
    | Run file | ++cmd+r++ | Custom binding; see [Keybindings](#custom-keybinding-for-the-run-button) |
    | Run without debugging | ++ctrl+f5++ | Ctrl, not Cmd |
    | Run selection in REPL | ++shift+enter++ | Read-eval-print loop in the terminal |
    | Debug | ++f5++ | Click the left margin to set breakpoints |
    | Select interpreter | ++cmd+shift+p++, then **Python: Select Interpreter** | |

### Navigation and layout {.collapsible .collapsed}

=== ":fontawesome-brands-windows: WSL2"

    | Action | Shortcut |
    |---|---|
    | Command Palette | ++ctrl+shift+p++ |
    | Open file by name | ++ctrl+p++ |
    | Jump to function or class | ++ctrl+shift+o++ |
    | Go to line | ++ctrl+g++ |
    | Split editor | ++ctrl+backslash++ |
    | Toggle sidebar | ++ctrl+b++ |
    | Zoom in, out, reset | ++ctrl+equal++ / ++ctrl+minus++ / ++ctrl+num0++ |

=== ":fontawesome-brands-apple: macOS"

    | Action | Shortcut |
    |---|---|
    | Command Palette | ++cmd+shift+p++ |
    | Open file by name | ++cmd+p++ |
    | Jump to function or class | ++cmd+shift+o++ |
    | Go to line | ++ctrl+g++ |
    | Split editor | ++cmd+backslash++ |
    | Toggle sidebar | ++cmd+b++ |
    | Zoom in, out, reset | ++cmd+equal++ / ++cmd+minus++ / ++cmd+num0++ |

### Terminal {.collapsible .collapsed}

=== ":fontawesome-brands-windows: WSL2"

    | Action | Shortcut | Notes |
    |---|---|---|
    | Toggle terminal | ++ctrl+grave++ | |
    | New terminal | ++ctrl+shift+grave++ | |
    | Split terminal | ++ctrl+shift+5++ | With the terminal focused |
    | Copy | ++ctrl+c++ | With a selection; otherwise sends an interrupt |
    | Paste | ++ctrl+v++ | |
    | Clear | ++ctrl+l++ | |
    | Search command history | ++ctrl+r++ | Type part of an earlier command |

    The default shell is bash; its config file is `~/.bashrc`.

=== ":fontawesome-brands-apple: macOS"

    | Action | Shortcut | Notes |
    |---|---|---|
    | Toggle terminal | ++ctrl+grave++ | Ctrl, not Cmd |
    | New terminal | ++ctrl+shift+grave++ | |
    | Split terminal | ++cmd+backslash++ | With the terminal focused |
    | Copy | ++cmd+c++ | |
    | Paste | ++cmd+v++ | |
    | Clear | ++ctrl+l++ or ++cmd+k++ | ++cmd+k++ also clears scrollback |
    | Search command history | ++ctrl+r++ | Type part of an earlier command |

    The default shell is zsh; its config file is `~/.zshrc`.

Useful additions to your shell config file:

```bash
alias py=python3
alias ll='ls -lah'
```

After editing the file, run `source ~/.bashrc` or `source ~/.zshrc`, or open a
new terminal.

### Settings {.collapsible .collapsed}

Put the following in `course281/.vscode/settings.json`. Paste only the code if outermost braces are already present.
```json
{
  "files.autoSave": "onFocusChange",
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true,
  "editor.rulers": [88],
  "editor.mouseWheelZoom": true,
  "editor.minimap.enabled": false,
  "editor.stickyScroll.enabled": true,
  "python.analysis.inlayHints.variableTypes": true,
  "python.analysis.inlayHints.functionReturnTypes": true,
  "python.analysis.autoImportCompletions": true,
  "python.analysis.typeCheckingMode": "basic",
  "python.terminal.executeInFileDir": true,
  "chat.disableAIFeatures": true,
  "terminal.integrated.scrollback": 10000,
  "terminal.integrated.copyOnSelection": true,
  "terminal.integrated.fontSize": 13
}
```

| Setting | Effect |
|---|---|
| `files.autoSave` | Autosaves when focus moves elsewhere, so you never run a stale file |
| `files.trimTrailingWhitespace` | Removes trailing spaces on save |
| `files.insertFinalNewline` | Ends every file with a newline |
| `editor.rulers` | Draws a line-length guide at column 88 |
| `editor.mouseWheelZoom` | ++ctrl++ + scroll (++cmd++ + scroll on macOS) resizes editor text |
| `editor.minimap.enabled` | Hides the code overview on the right edge |
| `editor.stickyScroll.enabled` | Pins the current function or class header while scrolling |
| `python.analysis.typeCheckingMode` | Underlines likely bugs, such as wrong argument counts |
| `terminal.integrated.scrollback` | Keeps 10,000 lines of terminal output |
| `terminal.integrated.copyOnSelection` | Copies terminal text when you select it |
| `terminal.integrated.fontSize` | Sets the terminal font size |

### Custom keybinding for the ▷ (Run) button  {.collapsible .collapsed}

Keybindings are per user, not per workspace. To open the file, open the
Command Palette and run **Preferences: Open Keyboard Shortcuts (JSON)**.

=== ":fontawesome-brands-windows: WSL2"

    ```json
    [
      {
        "key": "ctrl+r",
        "command": "python.execInTerminal",
        "when": "editorLangId == python && editorTextFocus"
      }
    ]
    ```

    This file lives on the Windows side and applies to WSL windows too. In
    Python editors, it overrides **Open Recent** (++ctrl+r++). The
    `editorTextFocus` condition keeps ++ctrl+r++ as history search in the
    terminal.

=== ":fontawesome-brands-apple: macOS"

    ```json
    [
      {
        "key": "cmd+r",
        "command": "python.execInTerminal",
        "when": "editorLangId == python && editorTextFocus"
      }
    ]
    ```

`python.execInTerminal` is the command behind the ▷ (Run) button.
