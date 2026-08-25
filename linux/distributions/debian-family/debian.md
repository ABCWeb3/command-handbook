# أوامر Debian الخاصة

## تحديث النظام

```bash
sudo apt update
```

```bash
apt list --upgradable
```

```bash
sudo apt upgrade
```

## البحث والتثبيت

```bash
apt search package-name
```

```bash
sudo apt install package-name
```

## الحزم المثبتة

```bash
dpkg -l
```

> [!WARNING]
> لا تضف مستودعاً غير موثوق أو مخصصاً لإصدار Debian مختلف.
