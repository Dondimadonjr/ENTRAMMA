'use client';

import { ChangeEvent, DragEvent, useEffect, useMemo, useRef, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ImagePlus,
  Loader2,
  Trash2,
  UploadCloud
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { analyticsAttrs, analyticsEvents } from '@/lib/analytics';
import { getPricingSummary, getServiceTitle, serviceTypes } from '@/lib/quote';
import { formDiscountNote } from '@/lib/site';
import { quoteWhatsappUrl, type QuoteFormValues } from '@/lib/whatsapp';
import { cn } from '@/lib/utils';

const inputClass =
  'mt-1.5 w-full rounded-xl border border-white/15 bg-black/[0.18] px-3 py-2.5 text-sm text-[var(--text)] outline-none transition duration-200 placeholder:text-white/45 focus:border-blue-300/60 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.18)] md:rounded-[14px] md:py-3 md:text-base';

const labelClass = 'block text-sm font-extrabold md:text-base';
const noteClass = 'rounded-xl border border-blue-400/20 bg-blue-400/10 p-2.5 text-xs leading-5 text-blue-100 md:rounded-2xl md:p-3 md:text-sm';

const steps = [
  'Servicio',
  'Datos',
  'Tipo',
  'Medidas',
  'Detalles',
  'Fotos',
  'Comentarios',
  'Resumen'
];

const installationTypes = ['Balcon', 'Ventana', 'Escalera', 'Terraza', 'Piscina', 'Otro'];

const features = [
  'Tiene pilares',
  'Requiere estructura metalica',
  'Instalacion exterior',
  'Instalacion interior',
  'Hay obstaculos'
];

type PhotoPreview = {
  file: File;
  url: string;
};

const defaultValues: QuoteFormValues = {
  serviceType: '',
  nombre: '',
  telefono: '',
  correo: '',
  direccion: '',
  comuna: '',
  region: 'Region Metropolitana',
  tipoInstalacion: '',
  ancho: '',
  alto: '',
  obstaculosDetalle: '',
  comentarios: ''
};

export function ContactForm() {
  const [step, setStep] = useState(0);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [photos, setPhotos] = useState<PhotoPreview[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [sent, setSent] = useState(false);
  const photosRef = useRef<PhotoPreview[]>([]);

  const {
    register,
    control,
    setValue,
    trigger,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<QuoteFormValues>({ defaultValues, mode: 'onBlur' });

  const values = useWatch({ control });
  const progress = ((step + 1) / steps.length) * 100;
  const hasObstacles = selectedFeatures.includes('Hay obstaculos');

  const requiredFieldsByStep: Record<number, (keyof QuoteFormValues)[]> = {
    0: ['serviceType'],
    1: ['nombre', 'telefono', 'direccion', 'comuna', 'region'],
    2: ['tipoInstalacion'],
    3: ['ancho', 'alto'],
    4: hasObstacles ? ['obstaculosDetalle'] : [],
    5: [],
    6: [],
    7: []
  };

  const summaries = useMemo(
    () => [
      ['Servicio', getServiceTitle(values.serviceType)],
      ['Criterio de precio', getPricingSummary(values.serviceType)],
      ['Nombre', values.nombre],
      ['Telefono', values.telefono],
      ['Correo', values.correo || 'No indicado'],
      ['Direccion', values.direccion],
      ['Comuna', values.comuna],
      ['Region', values.region],
      ['Instalacion', values.tipoInstalacion],
      ['Medidas', values.ancho && values.alto ? `${values.ancho} ancho x ${values.alto} alto` : 'Pendiente'],
      ['Caracteristicas', selectedFeatures.length ? selectedFeatures.join(', ') : 'Sin caracteristicas marcadas'],
      ['Fotos', photos.length ? `${photos.length} imagen(es)` : 'Sin fotografias'],
      ['Comentarios', values.comentarios || 'Sin comentarios']
    ],
    [photos.length, selectedFeatures, values]
  );

  useEffect(() => {
    photosRef.current = photos;
  }, [photos]);

  useEffect(() => {
    return () => photosRef.current.forEach((photo) => URL.revokeObjectURL(photo.url));
  }, []);

  function addPhotos(files: FileList | File[]) {
    const imageFiles = Array.from(files).filter((file) => file.type.startsWith('image/'));

    setPhotos((current) => [
      ...current,
      ...imageFiles.map((file) => ({
        file,
        url: URL.createObjectURL(file)
      }))
    ]);
  }

  function removePhoto(url: string) {
    setPhotos((current) => {
      const removed = current.find((photo) => photo.url === url);
      if (removed) URL.revokeObjectURL(removed.url);
      return current.filter((photo) => photo.url !== url);
    });
  }

  function onFileChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files) addPhotos(event.target.files);
    event.target.value = '';
  }

  function onDrop(event: DragEvent<HTMLLabelElement>) {
    event.preventDefault();
    setIsDragging(false);
    addPhotos(event.dataTransfer.files);
  }

  async function goNext() {
    const fields = requiredFieldsByStep[step];
    const isValid = fields.length ? await trigger(fields, { shouldFocus: true }) : true;
    if (!isValid) return;
    setStep((current) => Math.min(current + 1, steps.length - 1));
  }

  function toggleFeature(feature: string) {
    setSelectedFeatures((current) =>
      current.includes(feature) ? current.filter((item) => item !== feature) : [...current, feature]
    );
  }

  function onSubmit(formValues: QuoteFormValues) {
    setSent(true);
    window.open(
      quoteWhatsappUrl(formValues, {
        caracteristicas: selectedFeatures,
        photoCount: photos.length
      }),
      '_blank',
      'noopener,noreferrer'
    );
  }

  return (
    <form
      className="rounded-[18px] border border-[var(--line)] bg-white/[0.06] p-3 shadow-[0_12px_34px_rgba(0,0,0,0.24)] md:rounded-[var(--radius2)] md:p-[18px] md:shadow-[var(--shadow)]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-200 md:text-xs md:tracking-[0.18em]">Cotizacion estimada</p>
          <h3 className="mt-1 text-lg font-black md:text-xl">Solicita tu presupuesto</h3>
        </div>
        <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-[var(--muted)] md:px-3">
          {step + 1}/{steps.length}
        </span>
      </div>

      <div className="mt-3.5 md:mt-4">
        <div className="mb-2 flex items-center justify-between text-xs text-[var(--muted)]">
          <span>{steps[step]}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-white/10 md:h-2">
          <div
            className="h-full rounded-full bg-[linear-gradient(90deg,#60a5fa,#4ade80)] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mt-4 min-h-[300px] animate-fade-up md:min-h-[430px]">
        {step === 0 && (
          <div>
            <p className="text-[13px] leading-5 text-[var(--muted)] md:text-sm md:leading-6">
              Primero selecciona el tipo de servicio. Usaremos este dato para aplicar el criterio de precio correcto.
            </p>
            <div className="mt-3 grid gap-2.5 md:grid-cols-2 md:gap-3">
              {serviceTypes.map((serviceType) => {
                const Icon = serviceType.icon;
                const isSelected = values.serviceType === serviceType.id;

                return (
                  <button
                    key={serviceType.id}
                    type="button"
                    onClick={() => setValue('serviceType', serviceType.id, { shouldDirty: true, shouldValidate: true })}
                    className={cn(
                      'group min-h-[118px] rounded-xl border p-3 text-left transition duration-200 active:scale-[0.99] hover:-translate-y-0.5 md:min-h-[150px] md:rounded-2xl md:p-5',
                      isSelected
                        ? 'border-blue-300/70 bg-blue-400/15 text-white shadow-[0_18px_42px_rgba(59,130,246,0.18)]'
                        : 'border-white/10 bg-white/[0.04] text-[var(--muted)] hover:border-white/25 hover:bg-white/[0.07]'
                    )}
                  >
                    <span
                      className={cn(
                        'grid h-9 w-9 place-items-center rounded-xl border transition md:h-11 md:w-11 md:rounded-2xl',
                        isSelected ? 'border-green-300/40 bg-green-400/15 text-green-200' : 'border-white/10 bg-white/[0.04] text-blue-200'
                      )}
                    >
                      <Icon size={18} className="md:h-[22px] md:w-[22px]" />
                    </span>
                    <span className="mt-3 flex items-start justify-between gap-2 md:mt-4 md:gap-3">
                      <span>
                        <span className="block text-base font-black text-white md:text-lg">{serviceType.title}</span>
                        <span className="mt-1 block text-xs leading-5 text-[var(--muted)] md:mt-1.5 md:text-sm md:leading-6">{serviceType.description}</span>
                      </span>
                      {isSelected && <Check size={18} className="mt-1 shrink-0 text-green-300" />}
                    </span>
                  </button>
                );
              })}
            </div>
            {errors.serviceType?.message && <p className="mt-2 text-xs font-semibold text-red-200">{errors.serviceType.message}</p>}
            <input className="sr-only" {...register('serviceType', { required: 'Selecciona el servicio que necesitas.' })} />
          </div>
        )}

        {step === 1 && (
          <div className="grid gap-3">
            <div className="grid gap-3 md:grid-cols-2">
              <Field label="Nombre" error={errors.nombre?.message}>
                <input className={inputClass} placeholder="Tu nombre" {...register('nombre', { required: 'Indicanos tu nombre.' })} />
              </Field>
              <Field label="Telefono" error={errors.telefono?.message}>
                <input
                  className={inputClass}
                  placeholder="+56 9 1234 5678"
                  type="tel"
                  {...register('telefono', { required: 'Necesitamos un telefono de contacto.' })}
                />
              </Field>
            </div>
            <Field label="Correo (opcional)">
              <input className={inputClass} placeholder="correo@ejemplo.cl" type="email" {...register('correo')} />
            </Field>
            <Field label="Direccion" error={errors.direccion?.message}>
              <input
                className={inputClass}
                placeholder="Calle, numero, depto o referencia"
                {...register('direccion', { required: 'La direccion ayuda a coordinar la visita.' })}
              />
            </Field>
            <div className="grid gap-3 md:grid-cols-2">
              <Field label="Comuna" error={errors.comuna?.message}>
                <input className={inputClass} placeholder="Las Condes" {...register('comuna', { required: 'Indicanos la comuna.' })} />
              </Field>
              <Field label="Region" error={errors.region?.message}>
                <input className={inputClass} placeholder="Region Metropolitana" {...register('region', { required: 'Indicanos la region.' })} />
              </Field>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <p className="text-[13px] leading-5 text-[var(--muted)] md:text-sm md:leading-6">Elige el espacio donde necesitas la instalacion.</p>
            <div className="mt-3 grid grid-cols-2 gap-2.5 md:grid-cols-3">
              {installationTypes.map((type) => {
                const isSelected = values.tipoInstalacion === type;

                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setValue('tipoInstalacion', type, { shouldDirty: true, shouldValidate: true })}
                    className={cn(
                      'rounded-xl border p-3 text-left text-sm font-black transition duration-200 active:scale-[0.99] hover:-translate-y-0.5 md:rounded-2xl md:p-4',
                      isSelected
                        ? 'border-blue-300/70 bg-blue-400/15 text-white shadow-[0_16px_34px_rgba(59,130,246,0.16)]'
                        : 'border-white/10 bg-white/[0.04] text-[var(--muted)] hover:border-white/25 hover:bg-white/[0.07]'
                    )}
                  >
                    <span className="flex items-center justify-between gap-2">
                      {type}
                      {isSelected && <Check size={16} className="text-green-300" />}
                    </span>
                  </button>
                );
              })}
            </div>
            {errors.tipoInstalacion?.message && <p className="mt-2 text-xs text-red-200">{errors.tipoInstalacion.message}</p>}
            <input className="sr-only" {...register('tipoInstalacion', { required: 'Selecciona un tipo de instalacion.' })} />
          </div>
        )}

        {step === 3 && (
          <div className="grid gap-3">
            <div className="grid gap-3 md:grid-cols-2">
              <Field label="Ancho aproximado" error={errors.ancho?.message}>
                <input className={inputClass} placeholder="Ej: 3 metros" {...register('ancho', { required: 'Indicanos un ancho aproximado.' })} />
              </Field>
              <Field label="Alto aproximado" error={errors.alto?.message}>
                <input className={inputClass} placeholder="Ej: 2 metros" {...register('alto', { required: 'Indicanos un alto aproximado.' })} />
              </Field>
            </div>
            <p className={noteClass}>
              Las medidas son referenciales. Nuestro equipo realizara una visita tecnica para confirmar las dimensiones
              antes de la fabricacion.
            </p>
          </div>
        )}

        {step === 4 && (
          <div>
            <p className="text-[13px] leading-5 text-[var(--muted)] md:text-sm md:leading-6">Marca solo lo que aplique. Esto ayuda a estimar mejor el trabajo.</p>
            <div className="mt-3 grid gap-2.5">
              {features.map((feature) => {
                const checked = selectedFeatures.includes(feature);

                return (
                  <label
                    key={feature}
                    className={cn(
                    'flex cursor-pointer items-center gap-2.5 rounded-xl border p-2.5 text-sm font-semibold transition active:scale-[0.99] md:gap-3 md:rounded-2xl md:p-3',
                      checked ? 'border-blue-300/60 bg-blue-400/12 text-white' : 'border-white/10 bg-white/[0.04] text-[var(--muted)]'
                    )}
                  >
                    <input className="sr-only" type="checkbox" checked={checked} onChange={() => toggleFeature(feature)} />
                    <span className={cn('grid h-5 w-5 place-items-center rounded-md border', checked ? 'border-green-300 bg-green-400/20' : 'border-white/20')}>
                      {checked && <Check size={14} className="text-green-200" />}
                    </span>
                    {feature}
                  </label>
                );
              })}
            </div>
            {hasObstacles && (
              <Field className="mt-3" label="Describe los obstaculos" error={errors.obstaculosDetalle?.message}>
                <textarea
                  className={inputClass}
                  rows={3}
                  placeholder="Aire acondicionado, canerias, jardineras, barandas, etc."
                  {...register('obstaculosDetalle', { required: 'Cuentanos que obstaculos existen.' })}
                />
              </Field>
            )}
          </div>
        )}

        {step === 5 && (
          <div>
            <p className={noteClass}>Las fotografias nos ayudan a entregar una cotizacion mucho mas precisa.</p>
            <label
              onDragOver={(event) => {
                event.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={onDrop}
              className={cn(
                'mt-3 flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed p-4 text-center transition md:rounded-2xl md:p-6',
                isDragging ? 'border-blue-300 bg-blue-400/15' : 'border-white/20 bg-white/[0.04] hover:border-blue-300/50 hover:bg-white/[0.07]'
              )}
            >
              <UploadCloud className="text-blue-200 md:h-7 md:w-7" size={24} />
              <span className="mt-2 text-sm font-black">Arrastra imagenes o selecciona archivos</span>
              <span className="mt-1 text-xs text-[var(--muted)]">Puedes subir varias fotografias del lugar.</span>
              <input className="sr-only" type="file" accept="image/*" multiple onChange={onFileChange} />
            </label>
            {photos.length > 0 ? (
              <div className="mt-3 grid grid-cols-3 gap-2.5">
                {photos.map((photo) => (
                  <div key={photo.url} className="group relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] md:rounded-2xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={photo.url} alt={photo.file.name} className="h-full w-full object-cover" />
                    <button
                      type="button"
                      onClick={() => removePhoto(photo.url)}
                      className="absolute right-1.5 top-1.5 grid h-7 w-7 place-items-center rounded-full bg-black/65 text-white transition hover:bg-red-500 md:h-8 md:w-8"
                      aria-label={`Eliminar ${photo.file.name}`}
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-3 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-2.5 text-[13px] text-[var(--muted)] md:rounded-2xl md:p-3 md:text-sm">
                <ImagePlus size={18} className="text-blue-200" />
                Aun no has agregado fotografias.
              </div>
            )}
          </div>
        )}

        {step === 6 && (
          <Field label="Comentarios">
            <textarea
              className={inputClass}
              rows={5}
              placeholder="Agrega cualquier detalle que consideres importante."
              {...register('comentarios')}
            />
          </Field>
        )}

        {step === 7 && (
          <div>
            <p className={noteClass}>El presupuesto recibido es estimado y podra ajustarse luego de la visita tecnica.</p>
            <dl className="mt-3 grid gap-2">
              {summaries.map(([label, value]) => (
                <div key={label} className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5 md:rounded-2xl md:p-3">
                  <dt className="text-xs text-[var(--muted)]">{label}</dt>
                  <dd className="mt-1 break-words text-sm font-semibold text-white">{value}</dd>
                </div>
              ))}
            </dl>
            {sent && (
              <p className="mt-3 rounded-xl border border-green-300/20 bg-green-400/10 p-2.5 text-[13px] text-green-100 md:rounded-2xl md:p-3 md:text-sm">
                Abrimos WhatsApp con tu solicitud. Si agregaste fotos, adjuntalas en la conversacion para completar el envio.
              </p>
            )}
          </div>
        )}
      </div>

      {step === steps.length - 1 && (
        <p className={`${noteClass} mt-4`}>
          {formDiscountNote}
        </p>
      )}

      <div className="mt-4 flex gap-2.5 md:mt-5">
        {step > 0 && (
          <Button type="button" variant="ghost" onClick={() => setStep((current) => current - 1)} className="shrink-0">
            <ArrowLeft size={16} />
            Atras
          </Button>
        )}
        {step < steps.length - 1 ? (
          <Button type="button" variant="primary" size="full" onClick={goNext}>
            Continuar
            <ArrowRight size={16} />
          </Button>
        ) : (
          <Button
            className="min-w-0"
            type="submit"
            variant="primary"
            size="full"
            disabled={isSubmitting}
            {...analyticsAttrs(analyticsEvents.formSubmit)}
          >
            {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : null}
            Solicitar presupuesto
          </Button>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  className,
  children
}: {
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={cn(labelClass, className)}>
      {label}
      {children}
      {error && <span className="mt-1.5 block text-xs font-semibold text-red-200">{error}</span>}
    </label>
  );
}
