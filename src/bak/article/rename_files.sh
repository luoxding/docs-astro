#!/bin/bash

# 遍历当前目录下所有的 .md 文件
for file in *.md; do
    # 提取文件名中的数字部分（去掉扩展名）
    number="${file%.md}"
    
    # 检查文件名是否为纯数字
    if [[ "$number" =~ ^[0-9]+$ ]]; then
        # 根据数字的位数进行重命名
        if [ "$number" -lt 10 ]; then
            # 一位数，前面补两个零
            new_number="00${number}"
        elif [ "$number" -lt 100 ]; then
            # 两位数，前面补一个零
            new_number="0${number}"
        else
            # 三位数及以上，保持不变
            new_number="$number"
        fi
        
        # 构建新的文件名
        new_file="${new_number}.md"
        
        # 检查新文件名是否已存在，避免覆盖
        if [ -e "$new_file" ]; then
            echo "警告: $new_file 已存在，跳过重命名 $file"
        else
            mv "$file" "$new_file"
            echo "已将 $file 重命名为 $new_file"
        fi
    else
        echo "跳过非数字命名的文件: $file"
    fi
done
