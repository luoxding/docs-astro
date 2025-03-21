---
title: ArchLinux 安装笔记
description: A reference page in my new Starlight docs site.
---

如果 `lsblk` 没有显示未分配空间，可能是因为未分配空间尚未被分区工具识别或标记。我们需要使用分区工具（如 `fdisk` 或 `gdisk`）来查看和规划未分配空间。以下是具体步骤：

---

### 1. **确认未分配空间**
1. 运行以下命令查看磁盘分区表：
   ```bash
   sudo fdisk -l /dev/sdb
   ```
   - 这将显示 `/dev/sdb` 的详细分区信息，包括已分配和未分配的空间。

2. 如果未分配空间未显示，可能是因为分区表未更新。可以尝试使用 `parted` 工具查看：
   ```bash
   sudo parted /dev/sdb
   ```
   - 在 `parted` 交互界面中，输入 `print free` 查看未分配空间。

---

### 2. **规划未分配空间**
根据你的描述，未分配空间为 309GB，计划分为：
- **根分区（/）**：140GB
- **Home 分区（/home）**：169GB

以下是具体操作步骤：

#### 1. **使用 `fdisk` 或 `gdisk` 创建分区**
1. 启动 `fdisk` 或 `gdisk`：
   - 对于 MBR 分区表，使用 `fdisk`：
     ```bash
     sudo fdisk /dev/sdb
     ```
   - 对于 GPT 分区表，使用 `gdisk`：
     ```bash
     sudo gdisk /dev/sdb
     ```

2. **创建根分区（/）**：
   - 输入 `n` 创建新分区。
   - 选择分区类型（主分区或逻辑分区）。
   - 设置分区起始扇区（默认即可）。
   - 设置分区大小为 140GB（例如，输入 `+140G`）。
   - 记下新分区的设备名（如 `/dev/sdb8`）。

3. **创建 Home 分区（/home）**：
   - 再次输入 `n` 创建新分区。
   - 使用剩余空间（169GB）创建分区。
   - 记下新分区的设备名（如 `/dev/sdb9`）。

4. **保存分区表**：
   - 输入 `w` 保存并退出。

---

### 3. **格式化新分区**
1. **格式化根分区（/）**：
   ```bash
   sudo mkfs.ext4 /dev/sdb8
   ```

2. **格式化 Home 分区（/home）**：
   ```bash
   sudo mkfs.ext4 /dev/sdb9
   ```

---

### 4. **挂载新分区**
1. **挂载根分区（/）**：
   ```bash
   sudo mount /dev/sdb8 /mnt
   ```

2. **创建挂载点并挂载 Home 分区（/home）**：
   ```bash
   sudo mkdir /mnt/home
   sudo mount /dev/sdb9 /mnt/home
   ```

3. **验证挂载**：
   ```bash
   lsblk
   ```

---

### 5. **继续安装 Arch Linux**
4. **安装基本系统**：
   ```bash
   pacstrap /mnt base linux linux-firmware vim networkmanager
   ```

5. **生成文件系统表**：
   ```bash
   genfstab -U /mnt >> /mnt/etc/fstab
   ```

6. **进入新系统**：
   ```bash
   arch-chroot /mnt
   ```

---

### 6. **配置系统**
7. **设置时区**：
   ```bash
   ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
   hwclock --systohc
   ```

8. **本地化设置**：
   - 编辑 `/etc/locale.gen`，取消注释 `en_US.UTF-8 UTF-8` 和 `zh_CN.UTF-8 UTF-8`。
   - 生成本地化文件：
     ```bash
     locale-gen
     ```
   - 设置语言：
     ```bash
     echo "LANG=en_US.UTF-8" > /etc/locale.conf
     ```

9. **网络配置**：
   - 设置主机名：
     ```bash
     echo "archlinux" > /etc/hostname
     ```
   - 编辑 `/etc/hosts`，添加以下内容：
     ```bash
     127.0.0.1   localhost
     ::1         localhost
     127.0.1.1   archlinux.localdomain archlinux
     ```

10. **设置 Root 密码**：
   ```bash
   passwd
   ```

---

### 7. **安装引导加载器（GRUB）**
11. **安装 GRUB 和相关工具**：
   ```bash
   pacman -S grub efibootmgr
   ```

12. **安装 GRUB 到 EFI 分区**：
   ```bash
   grub-install --target=x86_64-efi --efi-directory=/boot/efi --bootloader-id=GRUB
   ```

13. **生成 GRUB 配置文件**：
   ```bash
   grub-mkconfig -o /boot/grub/grub.cfg
   ```

---

### 8. **完成安装**
14. **退出并重启**：
   ```bash
   exit
   umount -R /mnt
   reboot
   ```

15. **移除安装介质**：
   - 重启后，移除 U 盘，进入 Arch Linux。

---

### 总结
通过以上步骤，你可以成功规划未分配空间并安装 Arch Linux。如果仍有问题，请随时告诉我！