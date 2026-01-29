import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Extract order data
    const { orderId, customer, items, total, paymentMethod } = data
    
    // Format WhatsApp message
    const message = `🛍️ *NEW ORDER - Swaadvaad* 🛍️\n\n` +
                   `📋 *Order ID:* ${orderId}\n` +
                   `👤 *Customer:* ${customer.name}\n` +
                   `📱 *Phone:* ${customer.phone}\n` +
                   `📍 *Address:* ${customer.address}, ${customer.city}, ${customer.state} - ${customer.pincode}\n\n` +
                   `📦 *Order Items:*\n${items.map((item: any) => 
                     `• ${item.name} x${item.quantity} = ₹${item.price * item.quantity}`
                   ).join('\n')}\n\n` +
                   `💰 *Total Amount:* ₹${total}\n` +
                   `💳 *Payment Method:* ${paymentMethod === 'cod' ? 'Cash on Delivery' : 'Online Payment'}\n` +
                   `📅 *Order Time:* ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}\n`
    
    // Business WhatsApp number (replace with actual number)
    const businessNumber = process.env.WHATSAPP_NUMBER || '919876543210'
    
    // Create WhatsApp link
    const whatsappLink = `https://wa.me/${businessNumber}?text=${encodeURIComponent(message)}`
    
    // Send notification to business (you can add email/SMS here too)
    console.log('WhatsApp link generated:', whatsappLink)
    
    // For demo, we'll return the link. In production, you might want to automatically open it
    // or send it via a webhook to trigger actual WhatsApp message
    
    return NextResponse.json({ 
      success: true, 
      message: 'Order processed successfully',
      whatsappLink 
    })
    
  } catch (error) {
    console.error('Error processing order:', error)
    return NextResponse.json(
      { error: 'Failed to process order' },
      { status: 500 }
    )
  }
}