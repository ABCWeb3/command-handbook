# المستخدمون والمجموعات في macOS

## الهوية والمستخدمون المتصلون

```bash
id
```

```bash
who
```

## عرض المستخدمين والمجموعات المحلية

```bash
dscl . -list /Users
```

```bash
dscl . -list /Groups
```

## مجموعات مستخدم

```bash
groups username
```

## الملكية والصلاحيات

```bash
chown username:groupname file.txt
```

```bash
chmod u+x script.sh
```

> [!WARNING]
> أنشئ الحسابات واحذفها عادةً من إعدادات النظام لتجنب إعداد حساب ناقص.
