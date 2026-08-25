# SSH ونقل الملفات في Linux

## الاتصال

```bash
ssh username@server-address
```

منفذ مختلف:

```bash
ssh -p 2222 username@server-address
```

## نسخ ملف ومجلد

```bash
scp file.txt username@server-address:/remote/path/
```

```bash
scp -r directory/ username@server-address:/remote/path/
```

## المزامنة عبر rsync

```bash
rsync -avh --progress source/ username@server-address:/remote/path/
```

## إنشاء مفتاح حديث

```bash
ssh-keygen -t ed25519 -C "device-name"
```

> [!IMPORTANT]
> لا تنشر المفتاح الخاص، وتحقق من بصمة الخادم عند الاتصال أول مرة.
