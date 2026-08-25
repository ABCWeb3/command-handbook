# SSH ونقل الملفات في macOS

## الاتصال ومنفذ مخصص

```bash
ssh username@server-address
```

```bash
ssh -p 2222 username@server-address
```

## نسخ ملفات ومجلدات

```bash
scp file.txt username@server-address:/remote/path/
```

```bash
scp -r directory/ username@server-address:/remote/path/
```

## مفتاح SSH

```bash
ssh-keygen -t ed25519 -C "mac-device"
```

## مشاركة الشاشة المحلية

```bash
open "vnc://server-address"
```

> [!IMPORTANT]
> لا تنشر مفتاحك الخاص، وتحقق من بصمة خادم SSH عند أول اتصال.
