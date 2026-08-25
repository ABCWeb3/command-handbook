# أوامر Fedora الخاصة

## التحديث

```bash
sudo dnf upgrade --refresh
```

## البحث والتثبيت

```bash
dnf search package-name
```

```bash
sudo dnf install package-name
```

## الحزم المثبتة

```bash
dnf list installed
```

## حالة firewalld

```bash
sudo firewall-cmd --state
```

```bash
sudo firewall-cmd --list-all
```
