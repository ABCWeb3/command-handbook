# فهرس أوامر Linux

ينقسم المرجع إلى أوامر مشتركة تعمل على أغلب التوزيعات، وأوامر خاصة بكل عائلة.

## الأوامر المشتركة

| القسم | المحتوى |
|---|---|
| [الأساسيات والملفات](common/basics/file-management.md) | التنقل، النسخ، البحث والمساحة |
| [الشبكات](common/networking/network-diagnostics.md) | IP وDNS والمنافذ والاتصال |
| [النظام والخدمات](common/system/system-services.md) | العمليات والسجلات و`systemd` |
| [الأمان المصرح به](common/security/authorized-security-checks.md) | التجزئة والمنافذ وفحص شبكتك |

## التوزيعات

| العائلة | التوزيعات |
|---|---|
| Debian | [Debian](distributions/debian-family/debian.md) · [Ubuntu](distributions/debian-family/ubuntu.md) · [Kali](distributions/debian-family/kali.md) |
| Red Hat | [Fedora](distributions/redhat-family/fedora.md) · [RHEL ومشتقاته](distributions/redhat-family/rhel.md) |
| Arch | [Arch Linux ومشتقاته](distributions/arch-family/arch-linux.md) |
| SUSE | [openSUSE](distributions/suse-family/opensuse.md) |

## معرفة توزيعتك

```bash
cat /etc/os-release
```

ابحث عن `ID` و`ID_LIKE` لاختيار العائلة الصحيحة.

> [!NOTE]
> توضع الأوامر العامة في `common`، والاختلافات مثل مدير الحزم والمستودعات في ملف التوزيعة.
