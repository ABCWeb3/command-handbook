# معالجة النصوص في Linux

## الفرز وإزالة التكرار

```bash
sort file.txt
```

```bash
sort file.txt | uniq -c
```

## اختيار أعمدة

```bash
cut -d: -f1 /etc/passwd
```

## awk وsed

```bash
awk '{print $1}' file.txt
```

```bash
sed -n '1,20p' file.txt
```

## عد الأسطر والكلمات

```bash
wc -l file.txt
```

```bash
wc -w file.txt
```

## مقارنة ملفين

```bash
diff -u old.txt new.txt
```
