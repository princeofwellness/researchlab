"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ShapeProps {
    className?: string
    size?: number
    color?: string
    delay?: number
}

export function GeoCircle({ className, size = 100, color = "currentColor", delay = 0 }: ShapeProps) {
    return (
        <motion.svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            className={cn("opacity-20", className)}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay }}
        >
            <motion.circle
                cx="50"
                cy="50"
                r="48"
                stroke={color}
                strokeWidth="2"
                initial={{ pathLength: 0, rotate: -90 }}
                whileInView={{ pathLength: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay, ease: "easeInOut" }}
            />
        </motion.svg>
    )
}

export function GeoTriangle({ className, size = 100, color = "currentColor", delay = 0 }: ShapeProps) {
    return (
        <motion.svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            className={cn("opacity-20", className)}
            initial={{ opacity: 0, rotate: -15 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay }}
        >
            <motion.path
                d="M50 10 L90 90 L10 90 Z"
                stroke={color}
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay, ease: "easeInOut" }}
            />
        </motion.svg>
    )
}

export function GeoSquare({ className, size = 100, color = "currentColor", delay = 0 }: ShapeProps) {
    return (
        <motion.svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            className={cn("opacity-20", className)}
            initial={{ opacity: 0, rotate: 45 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay }}
        >
            <motion.rect
                x="10"
                y="10"
                width="80"
                height="80"
                stroke={color}
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay, ease: "easeInOut" }}
            />
        </motion.svg>
    )
}

export function GeoHexagon({ className, size = 100, color = "currentColor", delay = 0 }: ShapeProps) {
    return (
        <motion.svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            className={cn("opacity-20", className)}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay }}
        >
            <motion.path
                d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z"
                stroke={color}
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay, ease: "easeInOut" }}
            />
        </motion.svg>
    )
}

export function GeoCross({ className, size = 100, color = "currentColor", delay = 0 }: ShapeProps) {
    return (
        <motion.svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            className={cn("opacity-20", className)}
            initial={{ opacity: 0, rotate: -45 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay }}
        >
            <motion.path
                d="M50 10 L50 90 M10 50 L90 50"
                stroke={color}
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay, ease: "easeInOut" }}
            />
        </motion.svg>
    )
}
