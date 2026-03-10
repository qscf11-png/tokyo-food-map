import docx
import os
import glob
import sys

def read_docx(file_path):
    try:
        doc = docx.Document(file_path)
        fullText = []
        for para in doc.paragraphs:
            if para.text.strip():
                fullText.append(para.text.strip())
        return '\n'.join(fullText)
    except Exception as e:
        return f"Error reading {file_path}: {e}"

def process_folder(folder_path):
    files = glob.glob(os.path.join(folder_path, "*.docx"))
    all_content = []
    for f in files:
        all_content.append(f"--- File: {os.path.basename(f)} ---")
        all_content.append(read_docx(f))
        all_content.append("--- End of File ---\n")
    return "\n".join(all_content)

if __name__ == "__main__":
    folder = r"爬文"
    content = process_folder(folder)
    with open("output.txt", "w", encoding="utf-8") as f:
        f.write(content)
    print("Content written to output.txt")
