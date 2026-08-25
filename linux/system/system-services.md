# إدارة النظام والخدمات

## معلومات النظام والنواة

```bash
uname -a
```

معلومات التوزيعة:

```bash
cat /etc/os-release
```

## وقت التشغيل والحمولة

```bash
uptime
```

## الذاكرة

```bash
free -h
```

## العمليات

```bash
ps aux --sort=-%mem | head
```

يعرض أكثر العمليات استهلاكاً للذاكرة في أعلى القائمة.

عرض تفاعلي:

```bash
top
```

اضغط `q` للخروج.

## حالة خدمة systemd

```bash
systemctl status ssh --no-pager
```

استبدل `ssh` باسم الخدمة المطلوبة.

## تشغيل خدمة وإيقافها وإعادة تشغيلها

```bash
sudo systemctl start ssh
```

```bash
sudo systemctl stop ssh
```

```bash
sudo systemctl restart ssh
```

> [!WARNING]
> إعادة تشغيل خدمة قد تقطع المستخدمين المتصلين بها. افحص حالتها أولاً، خصوصاً عند الإدارة عن بعد.

## تفعيل الخدمة مع الإقلاع

```bash
sudo systemctl enable --now ssh
```

`--now` يشغّل الخدمة فوراً بالإضافة إلى تفعيلها عند الإقلاع.

## قراءة سجلات خدمة

```bash
journalctl -u ssh -n 50 --no-pager
```

عرض سجلات الإقلاع الحالي:

```bash
journalctl -b -p warning --no-pager
```

## تحديث Debian وUbuntu وKali

```bash
sudo apt update
```

عرض التحديثات المتاحة قبل تثبيتها:

```bash
apt list --upgradable
```

```bash
sudo apt upgrade
```
