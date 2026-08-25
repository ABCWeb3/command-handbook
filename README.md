# Command Handbook — الدليل العربي لأوامر أنظمة التشغيل

مرجع منظم لأوامر **Linux وWindows وmacOS**. تُكتب الأوامر والخيارات بالإنجليزية لتسهيل نسخها، بينما يكون الشرح بالعربية.

> [!IMPORTANT]
> نفّذ أوامر الإدارة والأمان فقط على أجهزتك أو الأنظمة التي لديك تصريح واضح لاختبارها. راجع الأمر جيداً قبل استخدام `sudo`.

## الأقسام

### Linux

- [الفهرس الكامل](linux/README.md)
- [الأوامر المشتركة](linux/README.md#الأوامر-المشتركة)
- [التوزيعات وعائلاتها](linux/distributions/README.md)
- [Debian وUbuntu وKali](linux/distributions/debian-family/README.md)
- [Fedora وRHEL](linux/distributions/redhat-family/README.md)
- [Arch Linux](linux/distributions/arch-family/README.md)
- [openSUSE](linux/distributions/suse-family/README.md)

### Windows

- [فهرس Windows الكامل](windows/README.md)
- [الأساسيات وإدارة الملفات](windows/basics/file-management.md)
- [الشبكات وتشخيصها](windows/networking/network-diagnostics.md)
- [إدارة النظام والخدمات](windows/system/system-services.md)
- [الأمان والفحوص المحلية](windows/security/local-security-checks.md)

### macOS

- [فهرس macOS الكامل](macos/README.md)
- [الأساسيات وإدارة الملفات](macos/basics/file-management.md)
- [الشبكات وتشخيصها](macos/networking/network-diagnostics.md)
- [إدارة النظام والخدمات](macos/system/system-services.md)
- [الأمان والفحوص المحلية](macos/security/local-security-checks.md)

## البحث السريع

على GitHub اضغط `/` ثم اكتب اسم الأمر. بعد تنزيل المستودع محلياً:

```bash
rg -n "اسم الأمر" .
```

مثال:

```bash
rg -n "systemctl" linux/
```

## طريقة عرض الأوامر

كل أمر يتبع هذا الشكل:

1. **الغرض:** ما الذي يفعله؟
2. **الأمر:** كتلة مستقلة قابلة للنسخ.
3. **الشرح:** معنى الخيارات والقيم.
4. **مثال:** استخدام عملي آمن.
5. **تنبيه:** عند وجود أثر إداري أو خطر فقدان بيانات.

## المساهمة

راجع [دليل المساهمة](CONTRIBUTING.md) قبل إضافة أمر أو تعديل الشرح.

## الترخيص

هذا المشروع متاح وفق [ترخيص MIT](LICENSE).
