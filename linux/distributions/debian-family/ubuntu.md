# أوامر Ubuntu الخاصة

Ubuntu مبني على Debian؛ راجع أيضاً [ملف Debian](debian.md).

## معلومات الإصدار

```bash
lsb_release -a
```

## تحديثات APT

```bash
sudo apt update && apt list --upgradable
```

## حزم Snap

```bash
snap list
```

```bash
sudo snap refresh
```

## حالة UFW

```bash
sudo ufw status verbose
```
