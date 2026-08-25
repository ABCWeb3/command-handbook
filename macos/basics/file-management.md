# الأساسيات وإدارة الملفات في macOS

## المجلد الحالي وعرض الملفات

```bash
pwd
```

```bash
ls -lah
```

## الانتقال وإنشاء مجلدات

```bash
cd "/path/to/directory"
```

```bash
mkdir -p projects/macos/notes
```

## النسخ والنقل مع التأكيد

```bash
cp -i source.txt destination.txt
```

```bash
mv -i old-name.txt new-name.txt
```

## فتح Finder أو تطبيق افتراضي

```bash
open .
```

```bash
open document.pdf
```

## البحث عبر Spotlight وداخل الملفات

```bash
mdfind -name "notes.txt"
```

```bash
grep -Rni -- "search text" .
```

## مساحة الأقراص والمجلدات

```bash
df -h
```

```bash
du -sh "/path/to/directory"
```

> [!CAUTION]
> تحقق من المسار قبل الحذف، ولا تستخدم `sudo rm -rf` كحل سريع للتنظيف.
