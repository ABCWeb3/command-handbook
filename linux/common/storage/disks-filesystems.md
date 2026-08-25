# الأقراص وأنظمة الملفات في Linux

## عرض الأقراص وأنظمة الملفات

```bash
lsblk -f
```

```bash
df -hT
```

```bash
sudo fdisk -l
```

## UUID ونقاط التركيب

```bash
sudo blkid
```

```bash
findmnt
```

## تركيب قرص وفصله

```bash
sudo mount /dev/sdX1 /mnt/data
```

```bash
sudo umount /mnt/data
```

استبدل `/dev/sdX1` بعد التحقق من `lsblk`.

## أكبر المجلدات

```bash
sudo du -xhd1 / | sort -h
```

> [!CAUTION]
> أوامر التقسيم والتهيئة قد تمحو البيانات؛ لم تُدرج هنا كأوامر نسخ مباشر دون سياق مفصل.
