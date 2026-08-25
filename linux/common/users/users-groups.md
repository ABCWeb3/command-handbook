# المستخدمون والمجموعات في Linux

## الهوية والمستخدمون المتصلون

```bash
id
```

```bash
who
```

```bash
getent passwd
```

## إنشاء مستخدم وتغيير كلمة مروره

```bash
sudo useradd -m -s /bin/bash username
```

```bash
sudo passwd username
```

## المجموعات

```bash
getent group
```

```bash
sudo usermod -aG groupname username
```

`-aG` يضيف المستخدم دون إزالة عضوياته الحالية.

## الملكية

```bash
sudo chown username:groupname file.txt
```

> [!WARNING]
> لا تعدّل حسابات النظام أو عضوية `sudo` قبل التأكد من الحاجة والتأثير.
