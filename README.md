#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
welcome.py

A friendly and professional onboarding script for new contributors.

Usage:
    python welcome.py

Purpose:
    ✅ Welcome new contributors to the project.
    ✅ Provide clear next steps for contributing.
    ✅ Confirm that Python is installed and working correctly.

Author: Your Name
Project: First Contributions
"""

import time
import platform
import sys


def print_welcome():
    """
    Prints a professional, engaging welcome message with
    onboarding instructions and environment details.
    """
    print("\n" + "=" * 70)
    print("🌟  Welcome to the First Contributions Project! 🌟".center(70))
    print("=" * 70)
    time.sleep(0.6)

    print("\n👋 Hello, Contributor!")
    print("We're excited to have you join our open-source community.")
    print("Your journey into collaborative coding starts right now! 🚀\n")
    time.sleep(1)

    # Environment information
    print("🔍 Environment Check:")
    print(f"   • Python Version : {platform.python_version()}")
    print(f"   • Operating System : {platform.system()} {platform.release()}")
    print(f"   • Interpreter Path : {sys.executable}\n")
    time.sleep(0.5)

    # Next steps
    print("📖 Getting Started — Your Next Steps:")
    print("   1️⃣  Read the README.md to understand the project.")
    print("   2️⃣  Review the CONTRIBUTING.md guidelines.")
    print("   3️⃣  Fork this repository to your GitHub account.")
    print("   4️⃣  Clone your fork locally: git clone <your-fork-url>")
    print("   5️⃣  Create a new branch for your changes.")
    print("   6️⃣  Make your changes and commit with clear messages.")
    print("   7️⃣  Push your branch and open a Pull Request (PR).\n")
    time.sleep(1)

    # Pro tips
    print("💡 Pro Tips for a Great Contribution:")
    print("   • Keep your PRs small, focused, and easy to review.")
    print("   • Use meaningful commit messages.")
    print("   • Be respectful and collaborative in code reviews.")
    print("   • Don’t hesitate to ask questions — we love curiosity!\n")
    time.sleep(0.6)

    print("✅ If you can see this message, your Python setup works perfectly!")
    print("🎉 Happy coding and welcome aboard!\n")
    print("=" * 70)


if __name__ == "__main__":
    print_welcome()
