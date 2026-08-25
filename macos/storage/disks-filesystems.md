# الأقراص والتخزين في macOS

## عرض الأقراص

```bash
diskutil list
```

```bash
diskutil info disk0
```

## المساحة ونقاط التركيب

```bash
df -h
```

```bash
mount
```

## وحدات APFS

```bash
diskutil apfs list
```

## أكبر المجلدات

```bash
du -hd 1 . | sort -h
```

## إخراج قرص خارجي

```bash
diskutil eject /dev/diskX
```

> [!CAUTION]
> تحقق من معرّف القرص عبر `diskutil list`؛ أوامر المسح والتقسيم قد تفقد البيانات.
