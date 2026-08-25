# الأرشفة والضغط في Linux

## إنشاء وفك أرشيف tar.gz

```bash
tar -czf archive.tar.gz directory/
```

```bash
tar -xzf archive.tar.gz
```

عرض المحتوى دون فك:

```bash
tar -tzf archive.tar.gz
```

## ZIP

```bash
zip -r archive.zip directory/
```

```bash
unzip archive.zip -d destination/
```

## 7-Zip

```bash
7z a archive.7z directory/
```

```bash
7z x archive.7z -odestination/
```

> [!CAUTION]
> افحص أسماء ومسارات الملفات داخل أرشيف غير موثوق قبل فكّه.
